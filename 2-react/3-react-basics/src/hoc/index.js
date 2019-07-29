import React from 'react';

import store from '../store'


export function withCard(InputComponent, title) {
    class Container extends React.Component {
        render() {
            return (
                <div class="card">
                    <div class="card-header">{title}</div>
                    <div class="card-body">
                        <InputComponent />
                    </div>
                </div>
            )
        }
    }
    Container.displayName = `withStyle<${InputComponent.name}>`
    return Container;
}


export function connect(InputComponent, callback) {
    class Container extends React.Component {
        constructor(props) {
            super(props)
            let state = callback(store.getState());
            this.state = {
                ...state
            }
        }
        componentDidMount() {
            store.subscribe(() => {
                let topics = store.getState().topics;
                this.setState({ topics })
            })
        }
        componentWillUnmount() {
            // unsubscribe
        }

        commonLogic() {
            //..    
        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            )
        }
    }

    Container.displayName = `Connect<${InputComponent.name}>`

    return Container;
}