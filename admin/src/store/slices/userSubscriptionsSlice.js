import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {create, destroy, get} from '../../services/userSubscriptionsService';

export const getUserSubscriptions = createAsyncThunk(
    'user-subscriptions/get',
    async ({page = 1}, thunkAPI) => {
        return await get(page)
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

export const UserSubscriptionsSlice = createSlice({
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

        builder.addCase(getUserSubscriptions.pending, (state, action) => {
            state.loading = true
            state.errors = null
        })
        builder.addCase(getUserSubscriptions.fulfilled, (state, action) => {
            const {data, message} = action.payload

            UserSubscriptionsSlice.caseReducers.setsubscriptionsFetched(state, {data, message})
        })
    }
});

export const {setSuccess, setErrors} = UserSubscriptionsSlice.actions;
export const userSubscriptions = (state) => state.subscriptions.subscriptions;
export const loading = (state) => state.subscriptions.loading;
export const total = (state) => state.subscriptions.total;
export const totalPages = (state) => state.subscriptions.totalPages;
export const errors = (state) => state.subscriptions.errors;
export const success = (state) => state.subscriptions.success;
export default UserSubscriptionsSlice.reducer;