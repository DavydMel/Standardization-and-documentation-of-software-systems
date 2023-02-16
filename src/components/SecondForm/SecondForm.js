import {useForm, useFieldArray} from "react-hook-form";
import Container from "react-bootstrap/Container";

import "./SecondForm.css";

function SecondForm() {
    const {register, watch, control, handleSubmit, reset} = useForm();
    const {fields, append, remove} = useFieldArray({
        control,
        name: "places"
    });


    const onSubmit = (data) => {
        let str = "";
        str += `Місто-відправник: ${data["senderCity"]}\n`;
        str += `Місто-одержувач: ${data["receiverCity"]}\n`;
        str += `Вид відправлення: ${data["shipmentType"]}\n`;
        data["places"].forEach((item, index) => {
            str += `Місце ${index + 1}:\n`;
            str += ` - кількість: ${item.amount}\n`;
            str += ` - ціна: ${item.price}\n`;
            str += ` - вага: ${item.weight}\n`;
            str += ` - довжина: ${item.length}\n`;
            str += ` - ширина: ${item.weight}\n`;
            str += ` - висота: ${item.height}\n`;
        });
        str += `Пакетування: ${data["packaging"] ? "включено" : "виключено"}\n`;
        str += `Етаж: ${data["floor"]}\n`;
        str += `Ліфт: ${data["elevator"] ? "присутній" : "відсутній"}\n`;
        str += `Послуга "Зворотна доставка": ${data["returnShipping"] ? "включена" : "виключена"}\n`;
        console.log(str);
    }

    return (
        <Container>
            <form className="sec" onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between">
                    <div>Маршрут</div>
                    <div>
                        <label className="m-1">
                            <small>Місто-відправиник</small><br />
                            <select {...register("senderCity")}>
                                <option value="Київ">Київ</option>
                                <option value="Житомир">Житомир</option>
                                <option value="Вінниця">Вінниця</option>
                                <option value="Рівне">Рівне</option>
                                <option value="Хмельницький">Хмельницький</option>
                            </select>
                        </label>
                        <label className="m-1">
                            <small>Місто-одержувач</small><br />
                            <select {...register("receiverCity")}>
                                <option value="Київ">Київ</option>
                                <option value="Житомир">Житомир</option>
                                <option value="Вінниця">Вінниця</option>
                                <option value="Рівне">Рівне</option>
                                <option value="Хмельницький">Хмельницький</option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr />

                <div className="d-flex justify-content-between">
                    <div>Вид відправлення</div>
                    <div>
                        <label className="m-1">
                            <select {...register("shipmentType")}>
                                <option value="Палети">Палети</option>
                                <option value="Вантажі">Вантажі</option>
                            </select>
                        </label>
                    </div>
                </div>
                <hr />

                <div>
                    <p>Характеристика місць</p>
                    {
                        fields.map((item, index) => (
                            <div key={item.id} className="d-flex align-items-end">
                                <label className="m-1 small">
                                    <small>Кількість</small><br />
                                    <input
                                        type="number"
                                        defaultValue={1}
                                        min={1}
                                        max={10}
                                        {...register(`places.${index}.amount`)}
                                    />
                                </label>
                                <label className="m-1 small">
                                    <small>Оголошена вартість</small><br />
                                    <input
                                        type="number"
                                        min={1}
                                        {...register(`places.${index}.price`)}
                                    />
                                    <span className="text-muted">грн</span>
                                </label>
                                <label className="m-1 small">
                                    <small>Вага</small><br />
                                    <input
                                        type="number"
                                        min={1}
                                        {...register(`places.${index}.weight`)}
                                    />
                                    <span className="text-muted">кг</span>
                                </label>
                                <label className="m-1 small">
                                    <small>Довжина</small><br />
                                    <input
                                        type="number"
                                        min={1}
                                        {...register(`places.${index}.length`)}
                                    />
                                </label>
                                <label className="m-1 small">
                                    <small>Ширина</small><br />
                                    <input
                                        type="number"
                                        min={1}
                                        {...register(`places.${index}.width`)}
                                    />
                                </label>
                                <label className="m-1 small">
                                    <small>Висота</small><br />
                                    <input
                                        type="number"
                                        min={1}
                                        {...register(`places.${index}.height`)}
                                    />
                                    <span className="text-muted">см</span>
                                </label>
                                <span className="option" onClick={() => remove(index)}>X</span>
                            </div>
                        ))
                    }
                    <span className="option" onClick={() => append({})}>Додати місце</span>
                </div>
                <hr />

                <div className="d-flex justify-content-around">
                    <div>
                        <span>Пакування</span>
                        <label className="m-1">
                            <input
                                type="checkbox"
                                {...register("packaging")}
                            />
                        </label>
                    </div>
                    <div>
                        {watch("packaging") && (
                            <div>
                                {
                                    watch("places").map((item) => {
                                        return (
                                            <div>
                                                {watch("shipmentType")}: {item.amount}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )}
                    </div>
                </div>
                <hr />

                <div className="d-flex justify-content-between">
                    <div>
                        <span>Послуга "Підйом на поверх"</span>
                        <br />
                        <br />
                        <br />
                        <div>
                            <span>Послуга "Зворотна доставка"</span>
                            <label className="m-1">
                                <input
                                    type="checkbox"
                                    {...register("returnShipping")}
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="m-1 medium d-flex">
                            <div className="d-flex justify-content-end">
                                <input
                                    type="number"
                                    {...register("floor")}
                                />
                                <small className="text-muted">кількість поверхів</small>
                            </div>
                            <div className="d-flex justify-content-end">
                                <span>Ліфт</span>
                                <label className="m-1">
                                    <input
                                        type="checkbox"
                                        {...register("elevator")}
                                    />
                                </label>
                            </div>
                        </label>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-around">
                    <input type="submit" value="Надіслати" />
                    <input
                        type="button"
                        value="Очистити"
                        onClick={() => {
                            reset();
                        }}
                    />
                </div>
            </form>
        </Container>
    );
}

export default SecondForm;