import location from "../../assets/clientImg/location.png"
import call from "../../assets/clientImg/call.png"
import mail from "../../assets/clientImg/mail.png"
import fax from "../../assets/clientImg/fax.png"

const data = [
    {
      icon: location,
      title: 'Our Main Office',
      address: '1st FLOOR, F33 , Phase-8,Sector 73 Sahibzada Ajit Singh Nagar, Punjab 160071'
    },
    {
      icon: call,
      alt: 'Call',
      title: 'Phone Number',
      content: ['+91 986754654', '7340740007']
    },
    {
      icon: fax, 
      title: 'Fax',
      content: ['1-234-74584']
    },
    { 
      icon: mail, 
      title: 'Mail us', 
      content: ['hr@baselineitdevelopment.com', 'sales@baselineit.com'] 
    }
  ];
  
  export default data;