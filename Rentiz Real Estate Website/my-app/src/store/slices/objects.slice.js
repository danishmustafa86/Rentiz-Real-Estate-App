import { db } from "../../config/firebase"; // Import the db from firebase.js
import { collection, getDocs, deleteDoc, doc, addDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createObjects = createAsyncThunk(
    "objects/createObjects",
    async (objectData) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), objectData);
            console.log("Document written with ID: ", docRef.id);
            return {
                id: docRef.id,
                ...objectData,
            };
        } catch (e) {
            console.error("Error adding document: ", e);
            throw e;
        }
    }
);

export const fetchObjects = createAsyncThunk(
    "objects/fetchObjects",
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "posts"));
            const objects = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return objects;
        } catch (error) {
            console.error("Error fetching objects:", error);
            throw error;
        }
    }
);

export const deleteObject = createAsyncThunk(
    "objects/deleteObject",
    async (objectId) => {
        try {
            await deleteDoc(doc(db, "posts", objectId));
            return objectId;
        } catch (error) {
            console.error("Error deleting object:", error);
            throw error;
        }
    }
);

export const updateObject = createAsyncThunk(
    "objects/updateObject",
    async ({ objectId, updatedData }) => {
        try {
            const objectRef = doc(db, "posts", objectId);
            await updateDoc(objectRef, updatedData);
            return { objectId, updatedData };
        } catch (error) {
            console.error("Error updating object:", error);
            throw error;
        }
    }
);

export const objectsSlice = createSlice({
    name: "objects",
    initialState: {
        objects: [],
        error: null,
        loading: false, // Add a loading field
    },
    reducers: {
        setObjects: (state, action) => {
            state.objects = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchObjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchObjects.fulfilled, (state, action) => {
                state.objects = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchObjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(createObjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createObjects.fulfilled, (state, action) => {
                state.objects.push(action.payload);
                state.loading = false;
                state.error = null;
            })
            .addCase(createObjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteObject.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteObject.fulfilled, (state, action) => {
                state.objects = state.objects.filter(
                    (object) => object.id !== action.payload
                );
                state.loading = false;
                state.error = null;
            })
            .addCase(deleteObject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateObject.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateObject.fulfilled, (state, action) => {
                const { objectId, updatedData } = action.payload;
                const index = state.objects.findIndex(
                    (object) => object.id === objectId
                );
                if (index !== -1) {
                    state.objects[index] = {
                        ...state.objects[index],
                        ...updatedData,
                    };
                }
                state.loading = false;
                state.error = null;
            })
            .addCase(updateObject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default objectsSlice.reducer;