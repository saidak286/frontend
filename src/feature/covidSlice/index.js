// import createSlice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

/**
 * Buat Slice: untuk generate action and reduer.
 * menerima param object: name, initialState,  reducers
 */
const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        provins: data.provinces,
    },
    reducers: {
        updateCovids(state, action) {
            const {provins} = state;
            const {provinsi, status, jumlah} = action.payload;

            //Find index of specific object using findIndex method.    
            const objIndex = provins.findIndex((obj) => obj.kota === provinsi);

            //Update object's name property.
            provins[objIndex][status] = parseInt(provins[objIndex][status]) + parseInt(jumlah);
        },
    },
});

// generate action and reducers
const covidReducer = covidSlice.reducer;
const { updateCovids } = covidSlice.actions;

// export action and reducers
export default covidReducer;
export { updateCovids };