import { defineStore } from 'pinia'

export const useStoreNotes = defineStore('storeNotes', {
    state: () => {
        const notes = [
            {
                id: 'id1',
                content: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                asperiores blanditiis dignissimos eius eligendi eos error esse est
                inventore iste, maxime neque odio quae saepe suscipit veritatis vero.
                Nihil, vel?`
            },
            {
                id: 'id2',
                content: 'This is a shorter note.'
            }
        ];

        return {notes};
    },

    actions: {
        addNote(content) {
            const note = {
                id: Math.random().toString(),
                content
            }

            this.notes.unshift(note);
        },

        delete(id) {
            this.notes = this.notes.filter(note => note.id !== id)
        },

        update(id, content) {
            const index = this.notes.findIndex(note => note.id === id);
            this.notes[index].content = content;
        }
    },

    getters: {
        getNoteContent: (state) => {
            return (id) => state.notes.find(note => note.id === id).content;
        },

        noteCount: (state) => {
            return state.notes.length;
        },

        totalCharCount: (state) => {
            return state.notes.reduce((total, note) => total + note.content.length, 0);
        }
    }
})