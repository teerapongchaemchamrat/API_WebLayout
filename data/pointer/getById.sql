SELECT [no]
    ,[x]
    ,[y]
    ,[diameter]
    ,[resource_id]
    ,[dept]
    
FROM [dbo].[pointer]
WHERE [resource_id]=@resource_id