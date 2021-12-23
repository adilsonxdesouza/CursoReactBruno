import React from "react";
/*import ClasseCarroComSpinner from "./componentes/ClasseCarroComSpinner";*/
//import  ComponentDidMountMethod from "./componentes/lifecycle/ComponentDidMountMethod";
import ComponentWillUnmount from "./componentes/lifecycle/ComponentWillUnmount";

export default function AppCicloVida() {
    return (
        <>
            {/*<GetDerivedStateFromProps nameFromParent="vim do pai" />*/}
            {/*<ComponentDidMountMethod />*/}
            {/* <ComponentDidMountMethodWithFetch />*/}
            {/*<ShouldComponentUpdateMethod />*/}
            {/*<GetSnapshotBeforeUpdateMethod />*/}
            {/*<ComponentDidUpdateMethod />*/}
            <ComponentWillUnmount/>
        </>
    );

}