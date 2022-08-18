pragma solidity <=0.6.0;
pragma experimental ABIEncoderV2;

contract Model {
    
    mapping(uint => uint[]) public preprocessorHash;
    mapping(uint => uint[]) public manufacturerHash;

    function addPreProcessorHashDetails(uint _product_batch_no, uint[] memory _raw_batch_no_arr) public {
        preprocessorHash[_product_batch_no] = _raw_batch_no_arr;
    }

    function addManufacturerHashDetails(uint _product_batch_no, uint[] memory _raw_batch_no_arr) public {
        manufacturerHash[_product_batch_no] = _raw_batch_no_arr;
    }

    struct FarmerDetails {
        uint batch_no;
        string crop_name;
        string buyer_name;
        string location;
        uint crop_quantity;
        uint crop_selling_price;
        string selling_date;
        string crop_description;
    }

    mapping(uint => FarmerDetails) public farmerDetailsMap;

    function addFarmerDetails(
        uint _batch_no,
        string memory _crop_name,
        string memory _buyer_name,
        string memory _location,
        uint _crop_quantity,
        uint _crop_selling_price,
        string memory _selling_date,
        string memory _crop_description
    ) public {
        farmerDetailsMap[_batch_no] = FarmerDetails(
                                            _batch_no,
                                            _crop_name,
                                            _buyer_name,
                                            _location,
                                            _crop_quantity,
                                            _crop_selling_price,
                                            _selling_date,
                                            _crop_description);
    }

    struct PreProcessorDetails {
        uint batch_no;
        uint processed_product_quantity;
        uint processed_product_selling_price;
        string processed_product_name;
        string processed_product_buyer_name;
        string processed_product_location;
        string processed_product_preocessing_date;
        string processed_product_selling_date;
        string processed_product_description;
        uint[] raw_batch_no;
    }

    mapping(uint => PreProcessorDetails) public preProcessorDetailsMap;

    function addPreProcessorDetails(
        uint[3] memory _uint_args,
        string[6] memory _string_args,
        uint[] memory _raw_batch_no
    ) public {
        preProcessorDetailsMap[_uint_args[0]] = PreProcessorDetails(
                                                    _uint_args[0],
                                                    _uint_args[1],
                                                    _uint_args[2],
                                                    _string_args[0],
                                                    _string_args[1],
                                                    _string_args[2],
                                                    _string_args[3],
                                                    _string_args[4],
                                                    _string_args[5],
                                                    _raw_batch_no);
        
        addPreProcessorHashDetails(_uint_args[0], _raw_batch_no);
    }

    struct ManufacturerDetails {
        uint batch_no;
        uint manufactured_product_quantity;
        uint manufactured_product_mrp;
        uint manufactured_product_selling_price;
        string manufactured_product_name;
        string manufactured_product_buyer_name;
        string manufactured_product_loaction;
        string manufactured_product_selling_date;
        string manufactured_product_mfg_date;
        string manufactured_product_exp_date;
        string manufactured_product_description;
        uint[] raw_batch_no;
    }

    mapping(uint => ManufacturerDetails) public manufacturerDetailsMap;

    function addManufacturerDetails(
        uint[4] memory _uint_args,
        string[7] memory _string_args,
        uint[] memory _raw_batch_no
    ) public {
        manufacturerDetailsMap[_uint_args[0]] = ManufacturerDetails(
                                                    _uint_args[0],
                                                    _uint_args[1],
                                                    _uint_args[2],
                                                    _uint_args[3],
                                                    _string_args[0],
                                                    _string_args[1],
                                                    _string_args[2],
                                                    _string_args[3],
                                                    _string_args[4],
                                                    _string_args[5],
                                                    _string_args[6],
                                                    _raw_batch_no);

        addManufacturerHashDetails(_uint_args[0], _raw_batch_no);
    }
}