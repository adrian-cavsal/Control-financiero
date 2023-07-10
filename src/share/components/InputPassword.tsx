import { Controller } from 'react-hook-form';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';


export function InputPassword(props: any) {
    const { error, name, label, style, icon, control, rules } = props


    return (
        <div className="field">
            <span className={style.span}>
                {icon && <i className={icon} />}
                <Controller name={name} control={control}
                    rules={rules}
                    render={({ field, fieldState }) => (
                        <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                    )} />
                <label htmlFor={name} className={classNames({ 'p-error': !!error[name] })}>{label}</label>
            </span>
            {error[name] && <small className="p-error">{error[name].message}</small>}
        </div>
    );
}