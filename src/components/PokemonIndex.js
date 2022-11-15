import React, { useState } from "react";
import { Button, Card, DatePicker, Divider, Input, Form, Progress, Slider, Spin } from "antd";
import 'antd/dist/antd.css';
import Individual from "./Individual";

function PokemonIndex() {
    return (
        <>
            <Individual name={"Pokemon 1"}></Individual>
            <Individual name={"Pokemon 2"}></Individual>
            <Individual name={"Pokemon 3"}></Individual>
        </>

    )
}

export default PokemonIndex;