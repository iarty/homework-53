import React, { } from 'react'

export default props => {
  let classes = ['list-group-item'];
  props.completed ? classes.push('list-group-item-success') : classes.push()
  return (
    <div className={classes.join(' ')} style={{ height: 50 }}>
      <div className="d-flex w-100 align-items-center justify-content-between">
        <p className="mb-1">{props.value}</p>
        <div className="text-right">
          <a style={{ color: 'green' }} className="mr-2" href="/#" onClick={props.onCompleted}><i className="fas fa-check"></i></a>
          <a style={{ color: "red" }} href="/#" onClick={props.onDelete}><i className="fas fa-trash-alt" href="/#"></i></a>
        </div>
      </div>
    </div>
  )
}
