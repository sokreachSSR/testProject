// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   jobCard: [],
// };

// export const JobAnnountment = createSlice({
//   name: "jobCard",
//   initialState,
//   reducers: {
//     setJobCard: (state, action) => {
//       state.jobCard = action.payload;
//     },
//     addJob: (state,action) => {
//       state.jobCard.push(action.payload);
//     },
    
//     updateJob: (state, action) => {
//       const { id, updates } = action.payload;
//       const jobIndex = state.jobCard.findIndex(job => job.jobAnnouncementId === id);
//       console.log("klak", jobIndex)
     
//       if (jobIndex !=-1) {
//         const filteredItems = state.jobCard.map(item => {
//           if(item.jobAnnouncementId===id) return {...item,description:{Experience:updates.Experience,workday:updates.workday},...updates} 
//           else 
//            return item
               
//         });
//       console.log("hell",filteredItems)
//         state.jobCard=filteredItems
     
//       }

      
//     },

//     deleteJobCard: (state, action) => {
//       state.jobCard = state.jobCard.filter(
//         (jobCard) => jobCard.jobAnnouncementId !== action.payload
//       );
//     },
//   },
// });




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobCard: [],
};

export const JobAnnountment = createSlice({
  name: "jobCard",
  initialState,
  reducers: {
    setJobCard: (state, action) => {
      state.jobCard = action.payload;
    },
    addJob: (state,action) => {
      state.jobCard.push(action.payload);
    },
    
    updateJob: (state, action) => {
      const { id, updates } = action.payload;
      const jobIndex = state.jobCard.findIndex(job => job.jobAnnouncementId === id);
     

      if (jobIndex !== -1) {
        const filteredItems = state.jobCard.map(item => {
          if(item.jobAnnouncementId===id) return {...item,description:{Experience:updates.Experience,workday:updates.workday,other:updates.other},...updates}
          else return item
        });
       
  state.jobCard = filteredItems
        // state.jobCard[jobIndex] = { ...state.jobCard[jobIndex], ...updates };
        // console.log("lll", {...state.jobCard[jobIndex], ...updates })
        // console.log("test", state.jobCard[jobIndex])
        // console.log("job",state)
      }
      
    },
    deleteJobCard: (state, action) => {
      const jobCardId = action.payload;
      console.log("delte id slice",jobCardId)
      state.jobCard = state.jobCard.filter(
        (jobCard) => jobCard.jobAnnouncementId !== jobCardId
      );
    },
  },
  
  
      


    
  
})

// Action creators are generated for each case reducer function
export const { setJobCard,updateJob, deleteJobCard} = JobAnnountment.actions;

export default JobAnnountment.reducer;