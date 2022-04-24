import { screen,render, fireEvent, waitFor, findByText } from "@testing-library/react";
import { mockComponent } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Country from "../component/Country";
import Nav from "../component/Nav";

// jest.mock("react-router-dom", () => {
// 	return {
//         country : {
//             useParams:()=> jest.fn()
//         }
		
//         //  () => {
// 			// return {
//             //         Country: "india"	
// 			// };
// 		// },
// 	};
// });

// jest.mock("react-router-dom", () => {
// 	return {
// 		useNavigate: jest.fn(),
// 	};
// });


// window.testCtx.location('href', currURL);
// // mock out replaceState to avoid SecurityError's
// jest.spyOn(window.history, 'replaceState');
// window.history.replaceState.mockImplementation((state, title, url) => {
//   window.testCtx.location('href', url);
// });

// describe('61130176', () => {
//     it('should push state', () => {
//       window.history.pushState = jest.fn();
//       render(<Country/>);
//       expect(window.history.pushState).toBeCalled();
//     });
//   });


describe('test for country',()=>{
    
jest.setTimeout(10000);

it('app country',()=>{
    const tree = render(
        
        <BrowserRouter><Country/></BrowserRouter>
       
    )});

it('app snap country',()=>{
    const tree = render(
        
        <BrowserRouter><Country/></BrowserRouter>
      
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})


test('app snap country button',async()=>{
     render(
       
        <BrowserRouter><Country/></BrowserRouter>
      
    )
    await new Promise((r) => setTimeout(r, 5000));

    // const btn = await screen.getByRole('button')
    // expect(btn).toBeInTheDocument()
    //  expect(btn).toBeInTheDocument()

   
    //     await waitFor(()=>{
    //         expect(screen.getByTestId('capital')).toBeInTheDocument()
    //     })
        
})
})


