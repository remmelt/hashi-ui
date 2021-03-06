import React, { Component } from "react"
import { connect } from "react-redux"
import IconMenu from "material-ui/IconMenu"
import IconButton from "material-ui/IconButton"
import FontIcon from "material-ui/FontIcon"
import MenuItem from "material-ui/MenuItem"
import { green500 } from "material-ui/styles/colors"
import JobEditRawJSON from "../JobEditRawJSON/JobEditRawJSON"
import JobActionStop from "../JobActionStop/JobActionStop"
import JobActionEvaluate from "../JobActionEvaluate/JobActionEvaluate"
import { JOB_SHOW_DIALOG } from "../../sagas/event"

class JobActionMenu extends Component {
  handleClick = key => {
    return () => {
      this.props.dispatch({ type: JOB_SHOW_DIALOG, payload: key })
    }
  }

  render() {
    const icon = (
      <IconButton>
        <FontIcon className="material-icons" color="white">more_vert</FontIcon>
      </IconButton>
    )

    return (
      <div>
        <JobEditRawJSON />
        <JobActionStop />
        <JobActionEvaluate />

        <IconMenu
          iconButtonElement={icon}
          style={{ background: green500, borderRadius: "50%" }}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          targetOrigin={{ horizontal: "left", vertical: "top" }}
        >
          <MenuItem
            primaryText="Edit job"
            rightIcon={<FontIcon className="material-icons">edit</FontIcon>}
            onTouchTap={this.handleClick("edit")}
          />
          <MenuItem
            primaryText="Re-evaluate job"
            rightIcon={<FontIcon className="material-icons">refresh</FontIcon>}
            onTouchTap={this.handleClick("evaluate")}
          />
          <MenuItem
            primaryText="Stop job"
            rightIcon={<FontIcon className="material-icons">stop</FontIcon>}
            onTouchTap={this.handleClick("stop")}
          />
        </IconMenu>
      </div>
    )
  }
}

JobActionMenu.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
}

export default connect()(JobActionMenu)
