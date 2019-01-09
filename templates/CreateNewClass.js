import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

class $CLASS_NAME$ extends Component {

    /**
     * Mounting Cycle:
     *      - constructor(object props)
     *      - componentWillMount()  ==>  UNSAFE_componentWillMount()
     *      - render() -> React Element
     *      - componentDidMount()
     */


    /**
     * Updating Cycle:
     *      - componentWillReceiveProps(object nextProps)  ==>  UNSAFE_componentWillReceiveProps(object nextProps)
     *      - shouldComponentUpdate(object nextProps, object nextState) -> boolean
     *      - componentWillUpdate(object nextProps, object nextState)  ==>  UNSAFE_componentWillUpdate(object nextProps, object nextState)
     *      - render() -> React Element
     *      - componentDidUpdate(object prevProps, object prevState)
     */

    /**
     *
     * @param props
     */
    constructor(props) {
        /**
         * The component class is instantiated.
         * The parameters to the constructor are the element's initial props, as specified by the parent element.
         * You can optionally specify an initial state for the element by assigning an object to this.state.
         * At this point, no native UI has been rendered yet for this element.
         */
        super(props);
    }

    UNSAFE_componentWillMount() {
        /**
         * instead of componentWillMount
         *
         * This method is invoked only once,
         * before rendering occurs for the first time.
         * At this point, there is still no native UI rendered for this element.
         */
    }

    componentDidMount() {
        /**
         * This method is invoked only once, after rendering occurs for the first time.
         * At this point, the native UI for this element has finished rendering, and may be accessed through this.refs for direct manipulation.
         * If you need to make async API calls or execute delayed code with setTimeout, that should generally be done in this method.
         */
    }

    /**
     *
     * @param nextProps
     */
    UNSAFE_componentWillReceiveProps(nextProps) {
        /**
         * instead of componentWillReceiveProps
         *
         * The parent of this component has passed a new set of props.
         * This component will re-render.
         * You may optionally call this.setState() to update this component's internal state before the render method is called.
         */
    }

    /**
     *
     * @param nextProps
     * @param nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Based on the next values of props and state, a component may decide to re-render or not to re-render.
         * The base class's implementation of this method always returns true (the component should re-render).
         * For optimization, override this method and check if either props or state have been modified,
         * e.g. run an equality test of each key/value in these objects.
         * Returning false will prevent the render method from being called.
         */
        return true;
    }

    /**
     *
     * @param nextProps
     * @param nextState
     */
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        /**
         * instead of componentWillUpdate
         *
         * This method is invoked, after the decision has been made to re-render.
         * You may not call this.setState() here, since an update is already in progress.
         */
    }

    /**
     *
     * @param prevProps
     * @param prevState
     */
    componentDidUpdate(prevProps, prevState) {
        /**
         * This method is invoked after re-rendering occurs.
         * At this point, the native UI for this component has been updated to reflect the React Element returned from the render() method.
         */
    }


    render() {
        /**
         * Mounting Cycle:
         *      - The render method must return a React Element to render (or null, to render nothing).
         *
         * Updating Cycle:
         *      - This method is called, assuming shouldComponentUpdate returned true.
         *        The render method must return a React Element to render (or null, to render nothing).
         */

        return (
            <View> </View>
        );
    }

}

export default $CLASS_NAME$;


const styles = StyleSheet.create({});
