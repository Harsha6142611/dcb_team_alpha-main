const express = require("express");
const solc = require("solc");
const cors = require("cors");
// const { runTests } = require("./run-tests.js"); //to run the test cases 

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.post('/compile', (req, res) => {
  const solCode = req.body.solCode;

  // Compile the Solidity code
  const { bytecode, abi, errors, contract, outputData } = compileSolidityCode(solCode);

  if (errors) {
    res.status(400).json({ errors });
  } else {
    res.json({ message: "Compilation Successful", bytecode, abi, contract, outputData });

  }
});

app.post('/submit', async (req, res) => {
  const solCode = req.body.solCode;

  try {
    const results = await runTests(solCode);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function compileSolidityCode(solCode) {
  // Define the Solidity source code
  const input = {
    language: 'Solidity',
    sources: {
      'contract.sol': {
        content: solCode,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  // Compile the Solidity code
  const output = JSON.parse(solc.compile(JSON.stringify(input)));

  const outputData = JSON.stringify(output, null, 2);

  // Check for compilation errors
  if (output.errors) {
    const errors = output.errors.map(error => error.formattedMessage);
    return { errors };
  }

  // Extract and return the compiled contract bytecode and ABI
  const contractName = Object.keys(output.contracts['contract.sol'])[0];
  const bytecode = output.contracts['contract.sol'][contractName].evm.bytecode.object;
  const abi = output.contracts['contract.sol'][contractName].abi;
  const contract = output.contracts['contract.sol'][contractName];

  return { bytecode, abi, contract, outputData };
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




// const express = require("express");
// const solc = require("solc");
// const cors = require("cors");
// const Web3 = require("web3");
// const ganache = require("ganache-cli");

// const app = express();
// const port = 3001;

// app.use(express.json());
// app.use(cors());

// app.post('/compile', (req, res) => {
//   const solCode = req.body.solCode;

//   const { bytecode, abi, errors, contract, outputData } = compileSolidityCode(solCode);

//   if (errors) {
//     res.status(400).json({ errors });
//   } else {
//     res.json({ message: "Compilation Successful", bytecode, abi, contract, outputData });
//   }
// });

// app.post('/submit', async (req, res) => {
//   const solCode = req.body.solCode;

//   try {
//     const results = await runTests(solCode);
//     res.json({ results });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// function compileSolidityCode(solCode) {
//   const input = {
//     language: 'Solidity',
//     sources: {
//       'contract.sol': {
//         content: solCode,
//       },
//     },
//     settings: {
//       outputSelection: {
//         '*': {
//           '*': ['*'],
//         },
//       },
//     },
//   };

//   const output = JSON.parse(solc.compile(JSON.stringify(input)));
//   const outputData = JSON.stringify(output, null, 2);

//   if (output.errors) {
//     const errors = output.errors.map(error => error.formattedMessage);
//     return { errors };
//   }

//   const contractName = Object.keys(output.contracts['contract.sol'])[0];
//   const bytecode = output.contracts['contract.sol'][contractName].evm.bytecode.object;
//   const abi = output.contracts['contract.sol'][contractName].abi;
//   const contract = output.contracts['contract.sol'][contractName];

//   return { bytecode, abi, contract, outputData };
// }

// async function runTests(solCode) {
//   const { bytecode, abi, errors } = compileSolidityCode(solCode);
//   if (errors) {
//     throw new Error(errors.join("\n"));
//   }

//   const web3 = new Web3(ganache.provider());
//   const accounts = await web3.eth.getAccounts();

//   const contract = new web3.eth.Contract(abi);

//   const deployedContract = await contract
//     .deploy({ data: bytecode, arguments: ["Initial Message"] })
//     .send({ from: accounts[0], gas: '1000000' });

//   const testCases = [
//     {
//       name: "Initial Message Test",
//       method: "getMessage",
//       input: [],
//       expectedOutput: "Initial Message",
//     },
//     {
//       name: "Set Message Test",
//       method: "setMessage",
//       input: ["New Message"],
//       expectedOutput: null,
//     },
//     {
//       name: "Updated Message Test",
//       method: "getMessage",
//       input: [],
//       expectedOutput: "New Message",
//     },
//   ];

//   const results = [];

//   for (const test of testCases) {
//     if (test.method === "setMessage") {
//       try {
//         await deployedContract.methods[test.method](...test.input)
//           .send({ from: accounts[0], gas: '1000000' });
//         results.push({ name: test.name, result: "Passed" });
//       } catch (error) {
//         results.push({ name: test.name, result: `Failed: ${error.message}` });
//       }
//     } else {
//       try {
//         const result = await deployedContract.methods[test.method](...test.input).call();
//         if (result === test.expectedOutput) {
//           results.push({ name: test.name, result: "Passed" });
//         } else {
//           results.push({ name: test.name, result: `Failed: Expected ${test.expectedOutput}, got ${result}` });
//         }
//       } catch (error) {
//         results.push({ name: test.name, result: `Failed: ${error.message}` });
//       }
//     }
//   }

//   return results;
// }

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });
