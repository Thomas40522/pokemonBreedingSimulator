import React, { useState } from "react";
import { Button, Checkbox, Typography, Divider, Input, Form, Progress, Slider, Spin } from "antd";
const {Title} = Typography
import 'antd/dist/antd.css';

class Individual extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            IV: [1,1,1,1,1,1]
        };
    }

    IVUpdate (id, isCheck) {
        var newIV = this.state.IV
        newIV[id] = isCheck == 1 ? 0 : 1;
        this.setState({
            IV: newIV
        })
    }

    render() {
        return(
            <div>
            <Title level={4}>{this.props.name}</Title>
            <Form>
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(0, this.state.IV[0])} checked={this.state.IV[0] == 1}
                    >SPD {this.state.IV[0] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(1, this.state.IV[1])} checked={this.state.IV[1] == 1}
                    >ATK {this.state.IV[1] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(2, this.state.IV[2])} checked={this.state.IV[2] == 1}
                    >DEF {this.state.IV[2] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(3, this.state.IV[3])} checked={this.state.IV[3] == 1}
                    >SPA {this.state.IV[3] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item> 
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(4, this.state.IV[4])} checked={this.state.IV[4] == 1}
                    >SPD {this.state.IV[4] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Checkbox
                        onClick = {() => this.IVUpdate(5, this.state.IV[5])} checked={this.state.IV[5] == 1}
                    >SPE {this.state.IV[5] == 1 ? "best!" : "X"}</Checkbox>
                </Form.Item>
            </Form>
            </div>
        )
    }
}

export default Individual;