import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {HYDRATE} from 'next-redux-wrapper';
import {get} from '../../services/userSubscriptionsService';

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
    usersubscriptions: [],
    total: 0,
    totalPages: 0,
};

export const UserSubscriptionsSlice = createSlice({
    name: 'usersubscriptions',
    initialState,
    reducers: {
        setSuccess: (state, {payload}) => {
            state.success = payload
        },
        setErrors: (state, {payload}) => {
            state.errors = payload
        },
        setsubscriptionsFetched: (state, {data, message}) => {
            state.usersubscriptions = data?.data ?? []
            state.total = data?.total ?? 0
            state.totalPages = data?.totalPages ?? 0

            state.loading = false
            state.errors = message
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                return {
                    ...state,
                    ...action.payload.usersubscriptions,
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
export const userSubscriptions = (state) => state.usersubscriptions.usersubscriptions;
export const loading = (state) => state.usersubscriptions.loading;
export const total = (state) => state.usersubscriptions.total;
export const totalPages = (state) => state.usersubscriptions.totalPages;
export const errors = (state) => state.usersubscriptions.errors;
export const success = (state) => state.usersubscriptions.success;
export default UserSubscriptionsSlice.reducer;