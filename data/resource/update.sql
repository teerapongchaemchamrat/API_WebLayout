UPDATE [dbo].[resource]
SET
    [resource_id]=@resource_id_update,
    [model]=@model,
    [location]=@location
    
WHERE [resource_id]=@resource_id

SELECT 
      [resource_id]
      ,[model]
      ,[location]
  FROM [dbo].[resource]
  WHERE [resource_id]=@resource_id