pragma solidity <=0.6.0;

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
        uint crop_selling_price;
        uint crop_quantity;
    }

    mapping(uint => FarmerDetails) public farmerDetailsMap;

    function addFarmerDetails(
        uint _batch_no,
        string memory _crop_name,
        uint _crop_selling_price,
        uint _crop_quantity
    ) public {
        farmerDetailsMap[_batch_no] = FarmerDetails(
                                                    _batch_no,
                                                    _crop_name,
                                                    _crop_selling_price,
                                                    _crop_quantity);
    }

    struct PreProcessorDetails {
        uint batch_no;
        string processed_product_name;
        uint processed_product_selling_price;
        uint processed_product_quantity;
        uint[] raw_batch_no;
    }

    mapping(uint => PreProcessorDetails) public preProcessorDetailsMap;

    function addPreProcessorDetails(
        uint _batch_no,
        string memory _processed_product_name,
        uint _processed_product_selling_price,
        uint _processed_product_quantity,
        uint[] memory _raw_batch_no
    ) public {
        preProcessorDetailsMap[_batch_no] = PreProcessorDetails(
                                                    _batch_no,
                                                    _processed_product_name,
                                                    _processed_product_selling_price,
                                                    _processed_product_quantity,
                                                    _raw_batch_no);
        
        addPreProcessorHashDetails(_batch_no, _raw_batch_no);
    }

    struct ManufacturerDetails {
        uint batch_no;
        string manufactured_product_name;
        uint manufactured_product_selling_price;
        uint manufactured_product_quantity;
        uint[] raw_batch_no;
    }

    mapping(uint => ManufacturerDetails) public manufacturerDetailsMap;

    function addManufacturerDetails(
        uint _batch_no,
        string memory _manufactured_product_name,
        uint _manufactured_product_selling_price,
        uint _manufactured_product_quantity,
        uint[] memory _raw_batch_no
    ) public {
        manufacturerDetailsMap[_batch_no] = ManufacturerDetails(
                                                    _batch_no,
                                                    _manufactured_product_name,
                                                    _manufactured_product_selling_price,
                                                    _manufactured_product_quantity,
                                                    _raw_batch_no);

        addManufacturerHashDetails(_batch_no, _raw_batch_no);
    }
}