import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

import { actions } from 'data'
import TabMenuBuySellStatus from './template.js'

class TabMenuBuySellStatusContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (value) {
    if (this.props.partner === 'coinify') {
      this.props.coinifyActions.coinifyNextCheckoutStep('checkout')
    }
    this.props.input.onChange(value)
  }

  render () {
    return (
      <TabMenuBuySellStatus
        partner={this.props.partner}
        value={this.props.input.value}
        handleClick={this.handleClick}
      />
    )
  }
}

TabMenuBuySellStatusContainer.propTypes = {
  input: PropTypes.object.isRequired,
  partner: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => ({
  coinifyActions: bindActionCreators(actions.components.coinify, dispatch)
})

export default connect(
  undefined,
  mapDispatchToProps
)(TabMenuBuySellStatusContainer)
