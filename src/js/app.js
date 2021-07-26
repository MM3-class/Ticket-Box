const app = new Vue ({
    el: '#app',
    data: {
        first_name: '',
        last_name: '',
        email: '',
        t_quantity: 1,
        t_type: 'General Admission',
        referrals: [],
        request: '',
        agreement: false,
        sign: ''
    },
    computed: {
        full_name: function() {
            if(this.first_name && this.last_name) {
                return this.first_name + ' ' + this.last_name
            }
            else if (this.first_name === !String && this.last_name === !String){
                return "sorry you should to fill the application probably"
            }
        },
        ticketDescription: function () {
            if (this.t_quantity === 1) {
                return "ticket"
            }
            else {
                return "tickets"
            }
        },
        formIsValid: function () {
            return this.first_name && this.last_name && this.email && this.agreement;
        },
        submitForm: function () {
            return "Hello Vue"
        },
        formCompleted: function () {
            if(this.formIsValid) {
                return {
                    "background-color": '#1154f0',
                    cursor: 'pointer'
                }
            }
        },
        emailIsValid: function () {
            if(this.email.includes('@')) {
                return {
                    "background-color": '#c0ceee',
                    "border-width": '2px'
                }
            }
            else {
                return {
                    "background-color": '#ffeded',
                    "border-color": '#da5252'
                }
            }
        },
        firstNameIsValid: function () {
            if(this.first_name) {
                return {
                    "background-color": '#c0ceee',
                    "border-width": '2px'
                }
            }
            else {
                return {
                    "background-color": '#ffeded',
                    "border-color": '#da5252'
                }
            }
        },
        lastNameIsValid: function () {
            if(this.last_name) {
                return {
                    "background-color": '#c0ceee',
                    "border-width": '2px'
                }
            }
            else {
                return {
                    "background-color": '#ffeded',
                    "border-color": '#da5252'
                }
            }
        },
        ticketQuantity: function () {
            if(this.t_quantity >= 1) {
                return {
                    "background-color": '#c0ceee',
                    "border-width": '2px'
                }
            }
            else {
                return {
                    "background-color": '#ffeded',
                    "border-color": '#da5252'
                }
            }
        }
    },
    methods: {
        resetField: function () {
            this.first_name= '';
            this.last_name= '';
            this.email= '';
            this.t_quantity= '';
            this.t_type= 'General Admission';
            this.referrals= [];
            this.request= '';
            this.agreement= false;
            this.sign= '';
        }
    }
})