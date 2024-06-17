import React, { useEffect, useState, useRef } from 'react';

function DynamicProductVarient(props) {
    var { productDetail, scrollToRef } = props;
    const productFilters = productDetail.filters;
    const [selectedFilters, setSelectedFilters] = useState({});
    const [invalidFields, setInvalidFields] = useState({});

    const setData = (event) => {
        const { name, value } = event.target;
        const newSelectedFilters = { ...selectedFilters, [name]: value };
        setSelectedFilters(newSelectedFilters);

        // Validate field
        if (value === "null" || value === "") {
            setInvalidFields((prev) => ({ ...prev, [name]: true }));
        } else {
            setInvalidFields((prev) => ({ ...prev, [name]: false }));
        }

        handelMasterdata(newSelectedFilters);
        setFilterDataToProductDetail(newSelectedFilters);
    };

    const handelMasterdata = (newSelectedFilters) => {
        // Your logic here
    };

    const setFilterDataToProductDetail = (newSelectedFilters) => {
        let selectedReqFilters = 0;
        let totalReqFilter = 0;

        productDetail.filters.forEach((filter) => {
            if (filter.isRequried) {
                totalReqFilter += 1;
                if (newSelectedFilters[filter.name] && newSelectedFilters[filter.name] !== "null") {
                    selectedReqFilters += 1;
                }
            }
        });

        if (selectedReqFilters === totalReqFilter) {
            props.getFilterData(newSelectedFilters, true, scrollToRef);
        } else {
            props.getFilterData(newSelectedFilters, false, scrollToRef);
        }
    };

    const getFields = (data) => {
        if (data) {
            const isInvalid = invalidFields[data.name];

            if (data.fieldType === 'text') {
                return (
                    <input
                        required
                        onChange={setData}
                        name={data.name}
                        style={{
                            border: isInvalid ? '1px solid red' : '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '6px',
                            width: '40%'
                        }}
                        type="text"
                        placeholder='Enter Data'
                    />
                );
            } else if (data.fieldType === "picklist" && data.entries) {
                return (
                    <select
                        required
                        className='form-control select-size'
                        onChange={setData}
                        name={data.name}
                        style={{
                            border: isInvalid ? '1px solid red' : '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '6px',
                            width: '40%'
                        }}
                    >
                        <option value="null">Choose an option</option>
                        {data.entries.map((entry, index) => (
                            <option key={index} value={entry}>{entry}</option>
                        ))}
                    </select>
                );
            }
        }
        return null;
    };

    useEffect(() => {
        if (productFilters) {
            const initialFilters = {};
            productFilters.forEach((filter) => {
                initialFilters[filter.name] = '';
            });
            setSelectedFilters(initialFilters);
        }
    }, [productFilters]);

    return (
        <div className='filterDivContainer' ref={scrollToRef}>
            <form >
                {productFilters ? productFilters.map((filter, index) => (
                    <div key={index} className='formDiv'>
                        {filter.isRequried && <span style={{ color: 'red' }}>*</span>}
                        <span className='formElement'>{filter.name}: </span>
                        {getFields(filter)}
                    </div>
                )) : <div></div>}
            </form>
        </div>
    );
}

export default DynamicProductVarient;

