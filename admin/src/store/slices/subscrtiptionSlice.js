import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {update, show} from '../../services/subscriptionsService';

export const getsubscription = createAsyncThunk(
    'subscription/get',
    async ({id}, thunkAPI) => {
        return await show(id)
    }
)

export const updatesubscription = createAsyncThunk(
    'subscription/update',
    async (payload, thunkAPI) => {
        return await update(payload)
    }
)

const initialState = {
    success: false,
    loading: false,
    errors: null,
    subscription: null
};

export const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        setSuccess: (state, {payload}) => {
            state.success = payload
        },
        setErrors: (state, {payload}) => {
            state.errors = payload
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.subscription,
                };
            },
        },
    },
    extraReducers: builder => {

        builder.addCase(getsubscription.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getsubscription.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.subscription = data?.data ?? null

            state.loading = false
            state.errors = message
        })

        builder.addCase(updatesubscription.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(updatesubscription.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })
    }
});

export const {setSuccess, setErrors} = subscriptionSlice.actions;
export const subscription = (state) => state.subscription.subscription;
export const loading = (state) => state.subscription.loading;
export const errors = (state) => state.subscription.errors;
export const success = (state) => state.subscription.success;
export default subscriptionSlice.reducer;