UPDATE [dbo].[Employee]
SET [EmpID]=@EmpID,
    [Name]=@Name,
    [Position]=@Position,
    [ComID]=@ComID,
    [Email]=@Email,
    [Status]=@Status
WHERE [EmpID]=@EmpID

SELECT [EmpID]
      ,[Name]
      ,[Position]
      ,[ComID]
      ,[Email]
      ,[Status]
  FROM [dbo].[Employee]
  WHERE [EmpID]=@EmpID