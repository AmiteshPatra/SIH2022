export const MODEL_ADDRESS = '0x5D2EB5cb13Cf4bE16BcF8111F926670E2B266fcf'
export const MODEL_ABI = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "manufacturerDetailsMap",
      "outputs": [
        {
          "name": "batch_no",
          "type": "uint256"
        },
        {
          "name": "manufactured_product_name",
          "type": "string"
        },
        {
          "name": "manufactured_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "manufactured_product_quantity",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x476ca6f6"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "farmerDetailsMap",
      "outputs": [
        {
          "name": "batch_no",
          "type": "uint256"
        },
        {
          "name": "crop_name",
          "type": "string"
        },
        {
          "name": "crop_selling_price",
          "type": "uint256"
        },
        {
          "name": "crop_quantity",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xa2a5d2ab"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "preprocessorHash",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xb93ac27d"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "preProcessorDetailsMap",
      "outputs": [
        {
          "name": "batch_no",
          "type": "uint256"
        },
        {
          "name": "processed_product_name",
          "type": "string"
        },
        {
          "name": "processed_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "processed_product_quantity",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc5fa72a4"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "manufacturerHash",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe97d5c0e"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_product_batch_no",
          "type": "uint256"
        },
        {
          "name": "_raw_batch_no_arr",
          "type": "uint256[]"
        }
      ],
      "name": "addPreProcessorHashDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x88c18b52"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_product_batch_no",
          "type": "uint256"
        },
        {
          "name": "_raw_batch_no_arr",
          "type": "uint256[]"
        }
      ],
      "name": "addManufacturerHashDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc3740565"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_batch_no",
          "type": "uint256"
        },
        {
          "name": "_crop_name",
          "type": "string"
        },
        {
          "name": "_crop_selling_price",
          "type": "uint256"
        },
        {
          "name": "_crop_quantity",
          "type": "uint256"
        }
      ],
      "name": "addFarmerDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8c0e43f4"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_batch_no",
          "type": "uint256"
        },
        {
          "name": "_processed_product_name",
          "type": "string"
        },
        {
          "name": "_processed_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "_processed_product_quantity",
          "type": "uint256"
        },
        {
          "name": "_raw_batch_no",
          "type": "uint256[]"
        }
      ],
      "name": "addPreProcessorDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x6ed435d9"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_batch_no",
          "type": "uint256"
        },
        {
          "name": "_manufactured_product_name",
          "type": "string"
        },
        {
          "name": "_manufactured_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "_manufactured_product_quantity",
          "type": "uint256"
        },
        {
          "name": "_raw_batch_no",
          "type": "uint256[]"
        }
      ],
      "name": "addManufacturerDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xbed924a0"
    }
  ]