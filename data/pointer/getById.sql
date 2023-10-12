SELECT [no]
    ,[x]
    ,[y]
    ,[diameter]
    ,[Uf_asset_SerialNumber]
    ,[dept]
    
FROM [dbo].[pointer]
WHERE [Uf_asset_SerialNumber]=@Uf_asset_SerialNumber