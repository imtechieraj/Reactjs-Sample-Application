import { Breadcrumb } from 'react-bootstrap';
import React from 'react';

const arr = [1, 2, 3, 4];
const Fragments_ele = () => {
    return (
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
            </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
        </>
    )
}

const Fragments = () => {
    return (
        arr.map((data, index) => <><Fragments_ele key={index} /></>)
    )
}

export default Fragments;

