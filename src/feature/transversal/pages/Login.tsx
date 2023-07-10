import { Layout } from "../components";
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { Input } from "@/share/components/Input";
import { InputPassword } from "@/share/components/InputPassword";

export const Login = () => {
  const defaultValues = {
    email: '',
    password: '',
  }
  const { register, control, formState: { errors }, watch, handleSubmit, reset } = useForm({ defaultValues });

  const onSubmit = (data: any) => { console.log(data) }
  return <div>
    <Layout >
      <div className="form-group">
        <div className="form">
          <div className="cointainer">
            <h5>
              Iniciar Sesión
            </h5>
            <form onSubmit={handleSubmit(onSubmit)} className="p-fluid" >
              <Input control={control} errors={errors} name="email" label="Email" icon="pi pi-envelope" style={{ span: "p-float-label p-input-icon-right" }} rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' } }} />
              <InputPassword control={control} error={errors} name="password" label="Password" rules={{ required: 'Password is required.', }} style={{ span: "p-float-label" }} />
              <Button label="Iniciar Sesión" className="p-button-success" type="submit" />
            </form>
          </div>

        </div>


      </div>
    </Layout >
  </div>;
};
