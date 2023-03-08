import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './pages/Layout';
import Dashboard  from './pages/Dashboard';
 
import Leaders from './pages/leader/Leaders';
import LeadersForm from './pages/leader/LeadersForm';
import AddPosting from './pages/leader/AddPostings'

import Members from './pages/member/Members';
import MembersForm  from './pages/member/MembersForm';

import AssociationPayments from './pages/association_payment/AssociationPayments';
import AssociationPaymentsForm  from './pages/association_payment/AssociationPaymentsForm';

import AssociationExpenses from'./pages/association_expenses/AssociationExpenses';
import AssociationExpensesForm from'./pages/association_expenses/AssociationExpensesForm';

import EventGallery from './pages/event_gallery/EventGallery';
import EventGalleryForm from './pages/event_gallery/EventGalleryForm';

import History from './pages/history/History';
import HistoryForm from './pages/history/HistoryForm';

import Invitation from './pages/invitation/Invitation';
import InvitationForm from './pages/invitation/InvitationForm';

import MembersPayment from './pages/members_payment/MembersPayment';
import MembersPaymentForm from './pages/members_payment/MembersPaymentForm';

import Login from './pages/login/Login';
import Register from './pages/login/Register';

function App() {
  return (  
    
  <ChakraProvider>
     <Routes>
      <Route exact path='/login'  element={<Login/>}/>
      <Route exact path='/register' element={<Register/>} />

      <Route path='/' element={<Layout/>} >              
        <Route index  element={<Dashboard/>} />       

        <Route path='leaders' element={<Leaders/>} />
        <Route path='create_leaders' element={<LeadersForm/>} />
        <Route path='create_leaders/:empid' element={<LeadersForm/>} />
        <Route path='add_posting' element={<AddPosting/>} />

        <Route path='ass_payment' element={<AssociationPayments/>} />
        <Route path='create_ass_payment' element={<AssociationPaymentsForm/>} />
        <Route path='create_ass_payment/:empid' element={<AssociationPaymentsForm/>} />

        <Route path='ass_expenses' element={<AssociationExpenses/>} />
        <Route path='create_ass_expenses' element={<AssociationExpensesForm/>} />
        <Route path='create_ass_expenses/:empid' element={<AssociationExpensesForm/>} />

        <Route path='gallery' element={<EventGallery/>} />
        <Route path='create_gallery' element={<EventGalleryForm/>} />
        <Route path='create_gallery/:empid' element={<EventGalleryForm/>} />

        <Route path='history' element={<History/>} />
        <Route path='create_history' element={<HistoryForm/>} />
        <Route path='create_history/:empid' element={<HistoryForm/>} />

        <Route path='invitation' element={<Invitation/>} />
        <Route path='create_invitation' element={<InvitationForm/>} />
        <Route path='create_invitation/:empid' element={<InvitationForm/>} />

        <Route path='members' element={<Members/>} />
        <Route path='create_members' element={<MembersForm/>} />
        <Route path='create_members/:empid' element={<MembersForm/>} />

        <Route path='members_payment' element={<MembersPayment/>} /> 
        <Route path='create_members_payment' element={<MembersPaymentForm/>} />
        <Route path='create_members_payment/:empid' element={<MembersPaymentForm/>} />         

      </Route>
     </Routes>
   </ChakraProvider>

  )
}

export default App;

