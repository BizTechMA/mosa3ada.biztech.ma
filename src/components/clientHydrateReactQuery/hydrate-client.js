"use client";

import { Hydrate as RQHydrate } from "@tanstack/react-query";

function Hydrate(props) {
    return <RQHydrate {...props} />;
}

export default Hydrate;