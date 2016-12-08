import React, { Component, PropTypes } from 'react';
import {Container} from 'flux/utils';
import StoreMain from '../../stores/StoreMain';
import ActionMain from '../../actions/ActionMain';

class ContainerMain extends Component {
  
  componentDidMount(){
    //this.initMain();
  }

  render() {
    let content = this.props.children && React.cloneElement(this.props.children, {
      viewInitialized: this.state.storeState.viewInitialized,
      storeState: this.state.storeState,
    });

    return content;
  }
}

ContainerMain.getStores = () => ([StoreMain]);
ContainerMain.calculateState = (prevState) => ({
  storeState: StoreMain.getState()
});
export default Container.create(ContainerMain);