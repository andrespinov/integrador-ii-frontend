import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, useHistory, useParams } from 'react-router-dom'
import { Topbar } from '../../components'
import { getProject } from '../../redux/project/projectActions'
import Materials from './Materials'
import Transactions from './Transactions'

const Project = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const history = useHistory()
  const { project }  = useSelector(state => state.projectReducer)

  useEffect(() => {
    const onFailure = () => history.push('/proyectos')
    dispatch(getProject(id, onFailure))
  }, [id, dispatch, history])

  return (
    <div>
      <Topbar showMenu title={`Proyecto ${project?.name || ''}`} projectId={id} />
      <Switch>
        <Route
          path='/proyecto/:id/transacciones'
          render={(props) => <Transactions {...props} projectId={id} />}
        />
        <Route
          path='/proyecto/:id/materiales'
          render={(props) => <Materials {...props} projectId={id} />}
        />
      </Switch>
    </div>
    
  )
}

export default Project
