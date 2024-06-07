// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import AceEditor from "react-ace";
// import Footer from "../components/Footer"
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-monokai";
// import "./Compiler.css";
// import Navbar from "../components/Navbar";
// // import logo from './assets/img/logo.svg'; // Ensure you have this image

// const Compiler = () => {
//   const [language, setLanguage] = useState("javascript");
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");

//   const handleCompile = () => {
//     // Placeholder for compile logic
//     setOutput("Compiled output will be shown here.");
//   };

//   const handleSubmit = () => {
//     // Placeholder for submit logic
//     setOutput("Submission result will be shown here.");
//   };

//   return (

//     <>
//     {/* <Navbar/> */}
//     <Container fluid className="p-3">
//       <Row>
//         <Col md={3} className="bg-dark text-white p-3">
//           <h5>Theme:</h5>
//           <p>Enchanted Contract In The Kingdom Of Hedera</p>
//           <h5>Casting The HelloHedera Spell</h5>
//           <p>
//             In the Enchanted Kingdom Of Hedera, a wise sorcerer crafted a
//             magical contract known as the "HelloHedera" spell. As the mists of
//             creation parted, the contract revealed its secrets...
//           </p>
//           <h6>Input Format:</h6>
//           <p>
//             Describe the steps involved in deploying the HelloHedera contract.
//           </p>
//           <h6>Output Format:</h6>
//           <p>Confirmation of the successful deployment of the contract.</p>
//           <h6>Example Input:</h6>
//           <p>
//             Deploy the HelloHedera contract with the initial message "Greetings,
//             realm of Hedera!"
//           </p>
//           <h6>Example Output:</h6>
//           <p>
//             Confirmation that the HelloHedera contract has been successfully
//             deployed with the initial message "Greetings, realm of Hedera!"
//           </p>
//         </Col>
//         <Col md={9} className="p-3">
//           <Row className="mb-2">
//             <Col md={6}>
//               <Form.Select
//                 value={language}
//                 onChange={(e) => setLanguage(e.target.value)}
//               >
//                 <option value="javascript">JavaScript</option>
//                 <option value="python">Python</option>
//                 <option value="solidity">Solidity</option>
//                 {/* Add more languages as needed */}
//               </Form.Select>
//             </Col>
//           </Row>
//           <AceEditor
//             mode={language}
//             theme="monokai"
//             name="code-editor"
//             onChange={(newCode) => setCode(newCode)}
//             value={code}
//             editorProps={{ $blockScrolling: true }}
//             width="100%"
//             height="400px"
//             />
//           <div className="d-flex justify-content-end mt-2">
//             <Button variant="primary" className="me-2" onClick={handleCompile}>
//               Compile
//             </Button>
//             <Button variant="success" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </div>
//           <div className="output-container mt-3 p-3 bg-dark text-white">
//             <h6>Output:</h6>
//             <pre>{output}</pre>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//     <Footer/>
    
//             </>
//   );
// };

// export default Compiler;


  // const handleCompile = async () => {
  //   if (language === "solidity") {
  //     try {
  //       const response = await fetch("http://localhost:3001/compile", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ solCode: code }),
  //       });

  //       if (!response.ok) {
  //         const errorResponse = await response.json();
  //         throw new Error(errorResponse.errors.join("\n"));
  //       }

  //       const result = await response.json();
  //       setOutput(JSON.stringify(result, null, 2));
  //     } catch (error) {
  //       setOutput(`Error: ${error.message}`);
  //     }
  //   } else {
  //     setOutput("Compilation for this language is not supported yet.");
  //   }
  // };

  // const handleSubmit = async () => {
  //   if (language === "solidity") {
  //     try {
  //       const response = await fetch("http://localhost:3001/submit", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ solCode: code }),
  //       });

  //       if (!response.ok) {
  //         const errorResponse = await response.json();
  //         throw new Error(errorResponse.error);
  //       }

  //       const result = await response.json();
  //       setTestResults(result.results);
  //     } catch (error) {
  //       setOutput(`Error: ${error.message}`);
  //     }
  //   } else {
  //     setOutput("Submission for this language is not supported yet.");
  //   }
  // };

// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import AceEditor from "react-ace";
// import Footer from "../components/Footer";
// import "ace-builds/src-noconflict/mode-javascript";
// import "ace-builds/src-noconflict/theme-monokai";
// import "./Compiler.css";
// import Navbar from "../components/Navbar";

// const Compiler = () => {
//   const [language, setLanguage] = useState("javascript");
//   const [code, setCode] = useState("");
//   const [output, setOutput] = useState("");
//   const [testResults, setTestResults] = useState([]);

//   const handleCompile = async () => {
//     if (language === "solidity") {
//       try {
//         const response = await fetch("http://localhost:3001/compile", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ solCode: code }),
//         });

//         if (!response.ok) {
//           const errorResponse = await response.json();
//           throw new Error(errorResponse.errors.join("\n"));
//         }

//         const result = await response.json();
//         if (result.errors && result.errors.length > 0) {
//           setOutput(result.errors.join("\n"));
//         } else {
//           setOutput("Compilation successful");
//         }
//       } catch (error) {
//         setOutput(`Error: ${error.message}`);
//       }
//     } else {
//       setOutput("Compilation for this language is not supported yet.");
//     }
//   };

//   const handleSubmit = async () => {
//     const testCases = [
//       {
//         name: "Initial Message",
//         method: "getMessage",
//         input: [],
//         expectedOutput: "Greetings, realm of Hedera!",
//       },
//       {
//         name: "Set New Message",
//         method: "setMessage",
//         input: ["New message from Hedera"],
//         expectedOutput: "New message from Hedera",
//       },
//       {
//         name: "Get New Message",
//         method: "getMessage",
//         input: [],
//         expectedOutput: "New message from Hedera",
//       },
//     ];
  
//     if (language === "solidity") {
//       try {
//         const response = await fetch("http://localhost:3001/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ solCode: code, testCases }),
//         });
  
//         if (!response.ok) {
//           const errorResponse = await response.json();
//           throw new Error(errorResponse.error);
//         }
  
//         const result = await response.json();
//         setTestResults(result.results);
//       } catch (error) {
//         setOutput(`Error: ${error.message}`);
//       }
//     } else {
//       setOutput("Submission for this language is not supported yet.");
//     }
//   };
  
//   return (
//     <>
//       <Container fluid className="p-3">
//         <Row>
//           <Col md={3} className="bg-dark text-white p-3">
//             <h5>Theme:</h5>
//             <p>Enchanted Contract In The Kingdom Of Hedera</p>
//             <h5>Casting The HelloHedera Spell</h5>
//             <p>
//               In the Enchanted Kingdom Of Hedera, a wise sorcerer crafted a
//               magical contract known as the "HelloHedera" spell. As the mists of
//               creation parted, the contract revealed its secrets...
//             </p>
//             <h6>Input Format:</h6>
//             <p>
//               Describe the steps involved in deploying the HelloHedera contract.
//             </p>
//             <h6>Output Format:</h6>
//             <p>Confirmation of the successful deployment of the contract.</p>
//             <h6>Example Input:</h6>
//             <p>
//               Deploy the HelloHedera contract with the initial message "Greetings,
//               realm of Hedera!"
//             </p>
//             <h6>Example Output:</h6>
//             <p>
//               Confirmation that the HelloHedera contract has been successfully
//               deployed with the initial message "Greetings, realm of Hedera!"
//             </p>
//           </Col>
//           <Col md={9} className="p-3">
//             <Row className="mb-2">
//               <Col md={6}>
//                 <Form.Select
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                 >
//                   <option value="javascript">JavaScript</option>
//                   <option value="python">Python</option>
//                   <option value="solidity">Solidity</option>
//                   {/* Add more languages as needed */}
//                 </Form.Select>
//               </Col>
//             </Row>
//             <AceEditor
//               mode={language}
//               theme="monokai"
//               name="code-editor"
//               onChange={(newCode) => setCode(newCode)}
//               value={code}
//               editorProps={{ $blockScrolling: true }}
//               width="100%"
//               height="400px"
//             />
//             <div className="d-flex justify-content-end mt-2">
//               <Button variant="primary" className="me-2" onClick={handleCompile}>
//                 Compile
//               </Button>
//               <Button variant="success" onClick={handleSubmit}>
//                 Submit
//               </Button>
//             </div>
//             <div className="output-container mt-3 p-3 bg-dark text-white">
//               <pre>{output}</pre>
//               {testResults.length > 0 && (
//                 <div className="test-results mt-3">
//                   {testResults.map((result, index) => (
//                     <div key={index} className="test-result">
//                       <strong>{result.name}</strong>: {result.result}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Compiler;

import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import AceEditor from "react-ace";
import Footer from "../components/Footer";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "./Compiler.css";
import Navbar from "../components/Navbar";

const Compiler = () => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [testResults, setTestResults] = useState([]);

  const handleCompile = async () => {
    if (language === "solidity") {
      try {
        const response = await fetch("http://localhost:3001/compile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ solCode: code }),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.errors.join("\n"));
        }

        const result = await response.json();
        setOutput(result.message);
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else {
      setOutput("Compilation for this language is not supported yet.");
    }
  };

  const handleSubmit = async () => {
    if (language === "solidity") {
      try {
        const response = await fetch("http://localhost:3001/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ solCode: code }),
        });

        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.error);
        }

        const result = await response.json();
        setTestResults(result.results);
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else {
      setOutput("Submission for this language is not supported yet.");
    }
  };

  return (
    <>
      <Container fluid className="p-3">
        <Row>
          <Col md={3} className="bg-dark text-white p-3">
            <h5>Theme:</h5>
            <p>Enchanted Contract In The Kingdom Of Hedera</p>
            <h5>Casting The HelloHedera Spell</h5>
            <p>
              In the Enchanted Kingdom Of Hedera, a wise sorcerer crafted a
              magical contract known as the "HelloHedera" spell. As the mists of
              creation parted, the contract revealed its secrets...
            </p>
            <h6>Input Format:</h6>
            <p>
              Describe the steps involved in deploying the HelloHedera contract.
            </p>
            <h6>Output Format:</h6>
            <p>Confirmation of the successful deployment of the contract.</p>
            <h6>Example Input:</h6>
            <p>
              Deploy the HelloHedera contract with the initial message "Greetings,
              realm of Hedera!"
            </p>
            <h6>Example Output:</h6>
            <p>
              Confirmation that the HelloHedera contract has been successfully
              deployed with the initial message "Greetings, realm of Hedera!"
            </p>
          </Col>
          <Col md={9} className="p-3">
            <Row className="mb-2">
              <Col md={6}>
                <Form.Select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="solidity">Solidity</option>
                </Form.Select>
              </Col>
            </Row>
            <AceEditor
              mode={language}
              theme="monokai"
              name="code-editor"
              onChange={(newCode) => setCode(newCode)}
              value={code}
              editorProps={{ $blockScrolling: true }}
              width="100%"
              height="400px"
            />
            <div className="d-flex justify-content-end mt-2">
              <Button variant="primary" className="me-2" onClick={handleCompile}>
                Compile
              </Button>
              <Button variant="success" onClick={handleSubmit}>
                Submit
              </Button>
            </div>
            <div className="output-container mt-3 p-3 bg-dark text-white">
              <pre>{output}</pre>
              {testResults.length > 0 && (
                <div className="test-results mt-3">
                  {testResults.map((result, index) => (
                    <div key={index} className="test-result">
                      <strong>{result.name}</strong>: {result.result}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Compiler;
