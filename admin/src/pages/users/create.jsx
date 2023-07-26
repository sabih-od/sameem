import React, {forwardRef, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addUser,
    loading as userLoading,
    errors as userErrors,
    success as userSuccess,
    setSuccess, setErrors
} from '../../store/slices/usersSlice'
import {useRouter} from "next/navigation";
import Grid from "@mui/material/Grid";
import {Alert, AlertTitle, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

function Create(props) {

    const dispatch = useDispatch()
    const {push} = useRouter()

    const loading = useSelector(userLoading)
    const errors = useSelector(userErrors)
    const success = useSelector(userSuccess)

    const [successMsg, setSuccessMessage] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        dispatch(setSuccess(false))
    }, [success])

    useEffect(() => {
        if (!loading && success) {
            setSuccessMessage('User added successfully!')
            setTimeout(() => {
                push('/users')
            }, 500)
        }
    }, [success, loading])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (loading) return

        dispatch(addUser({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            password,
        }))

    }

    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <Typography variant='h5'>
                    Create User
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        {successMsg ? (
                            <Alert severity="success" sx={{mb: 4}}>
                                <AlertTitle>Success</AlertTitle>
                                <Box component='strong' sx={{display: 'block'}}>{successMsg}</Box>
                            </Alert>
                        ) : null}
                        {errors && errors.length > 0 ? (
                            <Alert severity="error" sx={{mb: 4}}>
                                <AlertTitle>Errors</AlertTitle>
                                {errors.map((item, ind) => (
                                    <Box component='strong' sx={{display: 'block'}} key={ind}>{item}</Box>
                                ))}
                            </Alert>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <Grid row>
                                <Grid item xs={12}>
                                    <Stack direction='row' gap={5}>
                                        <TextField fullWidth label='First Name' value={firstName}
                                                   onChange={e => setFirstName(e.target.value)}/>
                                        <TextField fullWidth label='Last Name' value={lastName}
                                                   onChange={e => setLastName(e.target.value)}/>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Stack direction='row' gap={5}>
                                        <TextField fullWidth label='Email' type='email' value={email}
                                                   onChange={e => setEmail(e.target.value)}/>
                                        <TextField fullWidth label='Phone' value={phone}
                                                   onChange={e => setPhone(e.target.value)}/>
                                    </Stack>
                                </Grid>
                                <Grid item xs={6} sx={{mt: 5}}>
                                    <TextField fullWidth label='Password' type='password' value={password}
                                               onChange={e => setPassword(e.target.value)}/>
                                </Grid>

                                <Grid item xs={12} sx={{mt: 5}}>
                                    <Button type='submit' variant='contained' disabled={loading}>
                                        {loading ? 'Saving' : 'Save'}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Create;