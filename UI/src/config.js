export const MODEL_ADDRESS = '0x6e15dF10aa4FBb16148d5a113B60F8fFBCd54a08'
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
          "name": "manufactured_product_quantity",
          "type": "uint256"
        },
        {
          "name": "manufactured_product_mrp",
          "type": "uint256"
        },
        {
          "name": "manufactured_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "manufactured_product_name",
          "type": "string"
        },
        {
          "name": "manufactured_product_buyer_name",
          "type": "string"
        },
        {
          "name": "manufactured_product_loaction",
          "type": "string"
        },
        {
          "name": "manufactured_product_selling_date",
          "type": "string"
        },
        {
          "name": "manufactured_product_mfg_date",
          "type": "string"
        },
        {
          "name": "manufactured_product_exp_date",
          "type": "string"
        },
        {
          "name": "manufactured_product_description",
          "type": "string"
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
      "name": "raw_products",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x55cece13"
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
          "name": "buyer_name",
          "type": "string"
        },
        {
          "name": "location",
          "type": "string"
        },
        {
          "name": "crop_quantity",
          "type": "uint256"
        },
        {
          "name": "crop_selling_price",
          "type": "uint256"
        },
        {
          "name": "selling_date",
          "type": "string"
        },
        {
          "name": "crop_description",
          "type": "string"
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
          "name": "processed_product_quantity",
          "type": "uint256"
        },
        {
          "name": "processed_product_selling_price",
          "type": "uint256"
        },
        {
          "name": "processed_product_name",
          "type": "string"
        },
        {
          "name": "processed_product_buyer_name",
          "type": "string"
        },
        {
          "name": "processed_product_location",
          "type": "string"
        },
        {
          "name": "processed_product_preocessing_date",
          "type": "string"
        },
        {
          "name": "processed_product_selling_date",
          "type": "string"
        },
        {
          "name": "processed_product_description",
          "type": "string"
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
          "name": "_buyer_name",
          "type": "string"
        },
        {
          "name": "_location",
          "type": "string"
        },
        {
          "name": "_crop_quantity",
          "type": "uint256"
        },
        {
          "name": "_crop_selling_price",
          "type": "uint256"
        },
        {
          "name": "_selling_date",
          "type": "string"
        },
        {
          "name": "_crop_description",
          "type": "string"
        }
      ],
      "name": "addFarmerDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5eddd96f"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_uint_args",
          "type": "uint256[3]"
        },
        {
          "name": "_string_args",
          "type": "string[6]"
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
      "signature": "0x0fb77673"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_uint_args",
          "type": "uint256[4]"
        },
        {
          "name": "_string_args",
          "type": "string[7]"
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
      "signature": "0x88ea6fb9"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_product_id",
          "type": "uint256"
        }
      ],
      "name": "getRawProductDetails",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x5de576f5"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "returnRawProductDetails",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x4a975cbf"
    }
  ]