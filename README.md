# radzen-end-to-end-application in less than 10 min.

1. Create a new Radzen application.
1. Create a new SQL Server data source and press __Create sample schema__. Generate CRUD pages from the data source.
1. Enable security and generate security pages.
1. Delete the __Edit Order Detail__ and __Order Details__ pages.
1. Open the __Edit Order__ page.
    1. Add a DataGrid component and bind it to the `getOrderDetails` data source method with `$filter` parameter set to `OrderId eq ${parameters.Id}`.
    1. Set the __AllowAdd__ DataGrid property to `true`.
    1. Handle the DataGrid __Add__ event and open __Add Order Detail__ as a dialog with parameter `OrderId` set to `${parameters.Id}`
    1. Set the __AllowDelete__ DataGrid property to `true`.
    1. Handle the DataGrid __Delete__ event and invoke the `deleteOrderDetail` method with parameter `Id` set to `${event.Id}`.
1. Open __Add Order Detail__ page.
    1. Select the form component and remove the `OrderId` field. 
    1. Go to the __Events__ tab in the property grid. Replace the `${event}` value of the `submit` event parameter with `Object.assign(${event}, {OrderId: ${parameters.OrderId}})`. 
    1. Add a __Then__ action that navigates to __Edit Order__ with parameter `Id` set to `${parameters.OrderId}`.
1. Open the __Add Order__ page, select the form component and remove the `User Name` field.
1. Open generated application with your favorite edtor and add a new file called `OrdersController.custom.cs` next to `OrdersController.cs`:
    ```C#
    using System.Security.Claims;
    using [APPLICATION_NAME].Models.[DATASOURCE_NAME];

    namespace [APPLICATION_NAME].Controllers.[DATASOURCE_NAME]
    {
        public partial class OrdersController
        {
            partial void OnOrderCreated(Order item)
            {
                item.UserName = this.HttpContext.User.FindFirst(ClaimTypes.Name).Value;
            }
        }
    }
    ```
1. Run application
