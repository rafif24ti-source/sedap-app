import axios from 'axios'

const API_URL = "https://jwsovuvthmjfivwrtfae.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3c292dXZ0aG1qZml2d3J0ZmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4NjI2NTQsImV4cCI6MjA5NjQzODY1NH0.Wb3rPlW-Wa6oyhq72cBnrkBDhK2edMOqemoIy0OkWjk"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}