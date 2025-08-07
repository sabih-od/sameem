import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {create, destroy, get} from '../../services/subscriptionsService';

export const getsubscriptions = createAsyncThunk(
    'subscriptions/get',
    async ({page = 1}, thunkAPI) => {
        return await get(page)
    }
)

export const addsubscriptions = createAsyncThunk(
    'subscriptions/add',
    async (payload, thunkAPI) => {
        return await create(payload)
    }
)

export const deletesubscriptions = createAsyncThunk(
    'subscriptions/delete',
    async (payload, thunkAPI) => {
        return await destroy(payload)
    }
)


const initialState = {
    success: false,
    loading: false,
    errors: null,
    subscriptions: [],
    total: 0,
    totalPages: 0,
};

export const subscriptionsSlice = createSlice({
    name: 'subscriptions',
    initialState,
    reducers: {
        setSuccess: (state, {payload}) => {
            state.success = payload
        },
        setErrors: (state, {payload}) => {
            state.errors = payload
        },
        setsubscriptionsFetched: (state, {data, message}) => {
            state.subscriptions = data?.data ?? []
            state.total = data?.total ?? 0
            state.totalPages = data?.totalPages ?? 0

            state.loading = false
            state.errors = message
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.subscriptions,
                };
            },
        },
    },
    extraReducers: builder => {

        builder.addCase(getsubscriptions.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getsubscriptions.fulfilled, (state, action) => {
            const {data, message} = action.payload

            subscriptionsSlice.caseReducers.setsubscriptionsFetched(state, {data, message})
        })

        builder.addCase(addsubscriptions.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(addsubscriptions.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            state.success = !message
            state.errors = message
        })

        builder.addCase(deletesubscriptions.pending, (state, action) => {
            state.loading = true
            state.success = false
            state.errors = null
        })
        builder.addCase(deletesubscriptions.fulfilled, (state, action) => {
            const {data, message} = action.payload

            state.loading = false
            // state.success = !message
            // state.errors = message
        })
    }
});

export const {setSuccess, setErrors} = subscriptionsSlice.actions;
export const subscriptions = (state) => state.subscriptions.subscriptions;
export const loading = (state) => state.subscriptions.loading;
export const total = (state) => state.subscriptions.total;
export const totalPages = (state) => state.subscriptions.totalPages;
export const errors = (state) => state.subscriptions.errors;
export const success = (state) => state.subscriptions.success;
export default subscriptionsSlice.reducer;