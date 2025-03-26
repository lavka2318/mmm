import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { useFormOrderClient } from "@/pages/briefcase/briefcase/modalCreateOrder/formOrderClient/useFormOrderClient";
import { OrderType } from "@/services/briefcase/briefcase.type";

import s from "./formOrderClient.module.scss";
import { SelectWithSearch } from "@/components/ui/selectWithSearch/selectWithSearch";
import { TabSwitcher } from "@/components/ui/tabSwitcher";

type FormOrderClientProps = {
  arrProductsForClient: OrderType[];
  setArrProductsForClient: (arr: OrderType[]) => void;
  cheackIsEmptyForm: (isEmpty: boolean) => void
};
export const FormOrderClient = ({
  arrProductsForClient,
  setArrProductsForClient,
  cheackIsEmptyForm
}: FormOrderClientProps) => {
  const {
    addProductInBasket,
    arrOptionsProduct,
    comments,
    setComments,
    setIdChoiceProduct,
    setValueWeightInput,
    setValueWeightSelect,
    valueWeightInput,
    valueWeightSelect,
    errorForValueWeightInput,
  } = useFormOrderClient({
    cheackIsEmptyForm,
    arrProductsForClient,
    setArrProductsForClient,
  });

  const inputNumberProductHandler = (newValue: any) => {
    cheackIsEmptyForm(!!newValue)
    setValueWeightInput(newValue)
  }
  return (
    <div>
      <SelectWithSearch
        onChange={(value) => setIdChoiceProduct(value.value)}
        title={"Выбрать продукт"}
        options={arrOptionsProduct}
      />
      <div className={s.weightBox}>
        <Input
          className={s.inputWeight}
          label={"Кол-во"}
          onValueChange={inputNumberProductHandler}
          type={"number"}
          value={valueWeightInput}
          errorMessage={errorForValueWeightInput ? "Заполните поле" : ""}
        />
        <TabSwitcher
          onValueChange={(value) => setValueWeightSelect(value)}
          value={valueWeightSelect}
          valuesCollection={[
            { location: "кг.", value: "кг." },
            { location: "шт.", value: "шт." },
          ]}
        />
      </div>
      <Input
        className={s.comment}
        label={"Комментрии к продукту"}
        onValueChange={(value) => setComments(value)}
        value={comments}
      />
      <Button onClick={addProductInBasket} variant={"tertiary"}>
        Добавить продукт
      </Button>
    </div>
  );
};
