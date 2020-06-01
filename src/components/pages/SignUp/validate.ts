type validateProps = {
    name: string;
    value: any;
};

export default ({ name, value }: validateProps): Boolean => {
    let result = false;

    switch (name) {
        case "grade":
            try {
                const grade = parseInt(value, 10);
                result = grade > 6 && grade <= getCurrentAt();
            } catch (error) {
                console.error(error);
            }
            break;
        case "phone":
            result = /^010[0-9]{7,8}$/.test(value);
            break;
        case "birth":
            result = /([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))/.test(
                value
            );
            break;
        case "email":
            result = /^[0-9a-z\-_]*@[a-z]+(.[a-z]{2,3})+$/.test(value);
            break;
        default:
            result = !!value;
            break;
    }

    return result;
};

function getCurrentAt() {
    return new Date().getFullYear() - 2000;
}
