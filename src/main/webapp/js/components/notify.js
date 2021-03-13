import service from '../service.js';
import router from '../router.js';
import store from '../store.js';


export default {
    requiresAuth: true,

    getTitle: function () {
        return "Notify Professor";
    },

    render: function () {
        const $view = $($('#tpl-notify').html());


        const professor = store.getPersonToNotify()
        const moduleTitle = $('[data-field=title]').html()

        $('[name=professor]', $view).val(`${professor.firstName} ${professor.lastName}`)
        $('[name=email]', $view).val(`${professor.userName}@bfh.ch`)
        $('[name=subject]', $view).val(`Missing Grades in ${moduleTitle}`)
        $('[name=message]', $view).val(`Dear ${professor.firstName}, 
You have some grades missing in the above mentioned module. 
Please add the grades as soon as possible.
Thank you.`)


        $('[data-action=save]', $view).on('click', e => {
            e.preventDefault();
            const form = document.forms[0];
            const emailAdress = form.email.value;
            const subject = form.subject.value;
            const message = form.message.value;
            window.open(`mailto:${emailAdress}?subject=${subject}&body=${message}`);
            store.deletePersonToNoftiy();
            $('form', $view).remove();
            router.go("/modules");
        });

        $('[data-action=cancel]', $view).on('click', e => {
            e.preventDefault();
            store.deletePersonToNoftiy()
            router.go("/modules")
        });

        return $view;
    }
};



