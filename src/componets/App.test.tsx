import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from '../App'

describe('app test componet',()=>{
    test('snap shot for app',()=>{
        const tree = render(
            <BrowserRouter><App/></BrowserRouter>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })
})