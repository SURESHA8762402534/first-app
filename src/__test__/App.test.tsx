import { screen,render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Nav from "../component/Nav";



// jest.mock("react-router-dom", () => {
// 	return {
// 		useNavigate: jest.fn(),
// 	};
// });
// it("renders", () => {
//     render(<Nav navigate={()=>{}} />);
// });

it('app snap',()=>{
    const tree = render(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
})

