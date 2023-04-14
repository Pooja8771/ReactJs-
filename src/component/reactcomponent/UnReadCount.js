import React, { useState, useEffect } from 'react';
const emails = [
    'efowden0@yellowbook.com',
    'sshoute1@irs.gov',
    'jcaurah2@foxnews.com',
    'ajevon3@youtu.be',
    'skirrage4@mtv.com',
    'mjenner5@dailymotion.com',
    'amaccumeskey6@narod.ru',
    'rcudworth7@dailymotion.com',
    'dick8@godaddy.com',
    'gsynnott9@state.tx.us',
    'ghobbemaa@stumbleupon.com',
    'hcromblehomeb@cnet.com',
    'fsteadmanc@blogger.com',
    'aoronand@reference.com'
  ];

  function UnreadCount() {
    const [unreadEmails, setUnreadEmails] = useState(emails);
    const [unreadCount, setUnreadCount] = useState(emails.length);
  
    useEffect(() => {
      document.title = `My Inbox (${unreadCount})`;
    }, [unreadCount]);
  
    const handleRead = (index) => {
      setUnreadEmails((prevEmails) => prevEmails.filter((email, i) => i !== index));
      setUnreadCount((prevCount) => prevCount - 1);
    };
  
    return (
      <div>
        <ul>
          {unreadEmails.map((email, index) => (
            <li key={index}>
              {email}
              <button onClick={() => handleRead(index)}>Read</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default UnreadCount;