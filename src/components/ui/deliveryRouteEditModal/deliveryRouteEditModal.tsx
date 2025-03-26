import Modal from "@/components/ui/modal/modal";
import ModalWithContent from "@/components/ui/modal/modalWithContent/modalWithContent";
import {TableDeliveryRoutes} from "@/pages/deliveryRoutes/tableDeliveryRoutes/tableDeliveryRoutes";
import {useUpdateOrderDeliveryRouteMutation} from "@/services/briefcase/briefcase.services";
import {BriefcaseOrder} from "@/services/briefcase/briefcase.type";
import s from './deliveryRouteEditModal.module.scss';


type PropsType = {
  open: boolean,
  title: string,
  order: BriefcaseOrder,
  idBriefcase: string | undefined,
  setOpen: (isOpen: boolean) => void
};

export type editDRType = {
  _id: string,
  name: string,
  oldDeliveryRouteId: string
};
export const DeliveryRouteEditModal = ({
                                         open,
                                         setOpen,
                                         title,
                                         order,
                                         idBriefcase
                                       }: PropsType) => {
  const [updateOrderDeliveryRoute] = useUpdateOrderDeliveryRouteMutation();
  const editDR = (deliveryRoute: editDRType) => {
    const oldDeliveryRouteId = order?.deliveryRoute?._id;

    if (oldDeliveryRouteId === deliveryRoute._id) {
      alert("Заказ уже в маршруте: " + deliveryRoute.name + " !!!");
    } else {
      if (order?.deliveryRoute?._id) {
        order.deliveryRoute._id = deliveryRoute._id;
        order.deliveryRoute.name = deliveryRoute.name;
      }

      typeof oldDeliveryRouteId === "string" ? deliveryRoute.oldDeliveryRouteId = oldDeliveryRouteId : '';
      updateOrderDeliveryRoute({id: idBriefcase, orderId: order.orderId, body: deliveryRoute});
      setOpen(false)
    }
  };

  return (
    <Modal onOpenChange={setOpen} open={open} title={title}>
      <ModalWithContent className={s.content}>
        <TableDeliveryRoutes btnHandler={editDR}
                             btnName={"Добавить к маршруту"}/>
      </ModalWithContent>
    </Modal>
  );
};
