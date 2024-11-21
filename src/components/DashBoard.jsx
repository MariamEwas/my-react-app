import react from 'react';
import ProductForm from './ProductForm';
import UserForm from './UserForm'
export default function DashBoard(){
    return (<>
        <h2>Hello from DashBoard</h2>
        <div style={{display:'flex',
                padding:50,
                gap:30
        }}>
            <ProductForm />
            <UserForm />
        </div>
        
        </>
    )
    ;
}