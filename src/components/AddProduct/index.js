import { useNavigate } from 'react-router-dom';
import './index.css';
import { Button, Form, Input } from 'antd';
import CloseIcon from '@mui/icons-material/Close';
import { updateProduct } from '../../utils/changeData';
import { addProduct } from '../../services/product.service';

function AddProduct({ setIsChange, isChange, setIsUpdate, item }) {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        if (item?.name ) {
            updateProduct(values,item._id);
            setIsUpdate(false);
            setTimeout(() => {
                setIsChange(!isChange);
            }, 400);
        }
        else {
            try {
                const res = await addProduct(values);
                
                console.log(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        navigate('/');
        setIsChange(!isChange);
        onReset()
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            name: item.name,
            price: item.price,
            img: item.img,
            draft: item.isDraft
        })
    }
    if (item?.name) {

        onFill();
    }

    return (
        <div className='formBox'>
            {
                item?.name ? (<div className='myicon' onClick={() => setIsUpdate(false)} ><CloseIcon /></div>) : ""
            }
            <h2>Enter Product Details</h2>
            <div className='form'>
                <Form form={form} onFinish={onFinish}>
                    <Form.Item
                        name="name"
                        label="Product Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="img"
                        label="Image Url"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="price"
                        label="Product Price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item >
                        <Button className='saveButton' type="primary" htmlType="submit">
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}

export default AddProduct
