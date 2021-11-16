import React from 'react';


function Memo(Component){
    return class extends React.Component{

        constructor(props){
            super(props)

            this.state={
                count: 0
            }
        }

    onClickButton = (e) =>{
        this.props.onClickButton(e);
    }

    shouldComponentUpdate(nextProps, nextState){
      this.shouldComponentUpdate(nextProps,nextState)
    }

    


        render() {
            return (
                
             <Component items={this.state.count}
             click={this.onClickButton}
             update={this.shouldComponentUpdate}
             />
          )
      }
    }
}

export default Memo;