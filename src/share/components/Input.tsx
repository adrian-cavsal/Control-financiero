import { Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

type InputProps = {
    icon?: string
    style: { span: string }
    name: string
    control: any
    rules: any
    errors: any
    label: string
}

export const Input = ({ icon, style, name, control, rules, errors, label }: InputProps) => {
    return (
        <div className="field">
            <span className={style.span}>
                {
                    icon && <i className={icon} />
                }
                <Controller name={name} control={control} rules={rules}
                    render={({ field, fieldState }) =>
                        (<InputText id={field.name} {...field} className={classNames({ "p-invalid": fieldState.invalid })} />)} />
                <label htmlFor={name} className={classNames({ "p-error": !!errors[name] })}>
                    {label}
                </label>
            </span>
            {
                errors[name] && <small className='p-error'>{errors[name].message}</small>
            }
        </div>
    );
};