
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const firstname = document.getElementById('firstname').value;
            //const middlename = document.getElementById('middlename').value;
            const lastname = document.getElementById('lastname').value;
            const age = document.getElementById('age').value;
            
            // Store in localStorage
            localStorage.setItem('firstname', firstname);
            //localStorage.setItem('middlename', firstname);

            localStorage.setItem('lastname', lastname);
            localStorage.setItem('age', age);
            
            // Redirect to view.html
            window.location.href = 'view.html';
        });
    